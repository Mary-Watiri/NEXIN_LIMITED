from functools import wraps
from flask import Flask, jsonify, make_response, redirect, request, url_for
from flask_cors import CORS
from flask_migrate import Migrate
from databaseconfig import db
from endpoints.client_api import clients
from endpoints.tickets_api import tickets
from endpoints.admin_api import admin
from endpoints.auth_api import check_login, login, logout
from models import Tickets


app = Flask(__name__)
CORS(app, supports_credentials=True)  # Enable CORS with credentials support
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)


CORS(app, supports_credentials=True)  # Enable CORS with credentials support

# Dummy user data
users = {
    'user1': {'username': 'user1', 'password': 'pass1'},
    'user2': {'username': 'user2', 'password': 'pass2'}
}

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        username = request.cookies.get('username')
        if not username:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/')
def home():
    return 'Hello World!'

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return make_response(jsonify({'message': 'Username or password missing'}), 400)

    user = users.get(username)
    if not user or user['password'] != password:
        return make_response(jsonify({'message': 'Invalid credentials'}), 401)

    response = make_response(jsonify({'message': 'Logged in successfully'}), 200)
    response.set_cookie('username', username)  # Set cookie
    return response

@app.route('/api/check_login')
def check_login():
    username = request.cookies.get('username')
    if username:
        return jsonify({'logged_in': True, 'username': username})
    else:
        return jsonify({'logged_in': False}), 401

@app.route('/api/logout', methods=['POST'])
def logout():
    response = make_response(jsonify({'message': 'Logged out successfully'}), 200)
    response.set_cookie('username', '', expires=0)  # Delete cookie
    return response

@app.route('/api/protected')
@login_required
def protected():
    return jsonify({'message': 'This is a protected route'})
@app.route('/')
def index():
    return '<h3>Nexin LTD</h3>'

@app.route('/tickets/<int:ticket_id>', methods=['GET','DELETE','PATCH','POST'])
def get_ticket(ticket_id):
    ticket = Tickets.query.get(ticket_id)
    if ticket:
        ticket_data = {
            'id': ticket.id,
            'status': ticket.status.value,
            'priority': ticket.priority.value,
            'deadline': ticket.deadline,
            'assign_to': ticket.assign_to,
            'client_id': ticket.client_id,
            'comments': ticket.comments
        }
        return jsonify(ticket_data)
    else:
        return jsonify({'error': 'Ticket not found'}), 404

app.add_url_rule('/login', 'login', login, methods=['GET', 'POST'])
app.add_url_rule('/logout', 'logout', logout, methods=['GET', 'POST'])
app.add_url_rule('/check_login', 'check_login', check_login, methods=['GET', 'POST'])
app.add_url_rule('/admin', 'admin', admin, methods=['GET', 'POST'])
app.add_url_rule('/clients', 'clients', clients, methods=['GET', 'POST'])
app.add_url_rule('/tickets', 'tickets', tickets, methods=['GET', 'POST'])
app.add_url_rule('/protected', 'protected', protected, methods=['GET', 'POST'])





if __name__ == '__main__':
    app.run(port=5555, debug=True)