from datetime import datetime
from databaseconfig import db
from client import Client
from admin import Admin
from tickets import PriorityLevel, TicketStatus, Tickets
from tasks import Task
from app import app


# Use the app's context for database operations
with app.app_context():
    # Create the database tables
    db.create_all()
    
    # Create Admins
    admin1 = Admin(first_name='Sang', last_name='Wicklif', user_name='sangw', position=1, phone_number='1234567890', address='1234 Banda St', availability='available', email='sang@example.com')
    admin2 = Admin(first_name='Mary', last_name='Watiri', user_name='mw', position=2, phone_number='2345678901', address='5678 Kenyatta Ave', availability='not available', email='mary.w@example.com')
    admin3 = Admin(first_name='Sydney', last_name='Mukisira', user_name='sm', position=3, phone_number='1010101001', address='3rd Parklands Ave', availability='not available', email='syd@example.com')


    # Create clients
    client1 = Client(name='Mary Watiri', email='mary@example.com', phone_number='1234567890', address='P.O. 123 Watiri street')
    client2 = Client(name='Samuel Omoding', email='sam@example.com', phone_number='0987654321', address='P.O. 345 Samuel street')
    client3 = Client(name='Emmanuel Kimwaki', email='emman@example.com', phone_number='1235567890', address='P.O. 345 Emman street')
    client4 = Client(name='Sang Wicklife', email='sang@example.com', phone_number='0987653321', address='P.O. 345 Kliffen street')
    
    # Create tasks
    task1 = Task(title='Task 1', description='Description for Task 1')
    task2 = Task(title='Task 2', description='Description for Task 2')
    
    # Create tickets
    ticket1 = Tickets(status=TicketStatus.OPEN, priority=PriorityLevel.LOW, deadline=datetime.utcnow(), assign_to='None', client_id='1', comments='Very urgent')
    ticket2 = Tickets(status=TicketStatus.OPEN, priority=PriorityLevel.URGENT, deadline=datetime.utcnow(), assign_to='None', client_id='2', comments='Waiting for approval')

    # Add clients and tasks to the session
    db.session.add_all([admin1, admin2, admin3, client1, client2, client3, client4, task1, task2, ticket1, ticket2])

    # Commit the session to the database
    db.session.commit()
