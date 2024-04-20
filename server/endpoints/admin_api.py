from models import Admin
from flask import jsonify, request
from databaseconfig import db

def admin():
    if request.method == 'GET':
        
        admin = Admin.query.all()
        admin_list = []
        for admin in admin:
            admin_list.append({
                'id': admin.id,
                'first_name': admin.first_name,
                'last_name': admin.last_name,
                'user_name': admin.user_name,
                'position': admin.position,
                'phone_number': admin.phone_number,
                'address': admin.address,
                'availability': admin.availability,
                'email': admin.email
            })
        return jsonify(admin_list)
    
    elif request.method == 'POST':
        data = request.get_json()
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        user_name = data.get('user_name')
        position = data.get('position')
        phone_number = data.get('phone_number')
        address = data.get('address')
        availability = data.get('availability')
        email = data.get('email')
        admin = Admin(first_name=first_name, last_name=last_name, user_name=user_name, position=position, phone_number=phone_number, address=address, availability=availability, email=email)
        db.session.add(admin)
        db.session.commit()
        return jsonify({
            'id': admin.id,
            'first_name': admin.first_name,
            'last_name': admin.last_name,
            'user_name': admin.user_name,
            'position': admin.position,
            'phone_number': admin.phone_number,
            'address': admin.address,
            'availability': admin.availability,
            'email': admin.email
        }), 201
        # return jsonify(inserted_admin), 201
    
    elif request.method == 'DELETE':
        admin_id = request.args.get('id')
        admin = Admin.query.get(admin_id)
        if admin:
            db.session.delete(admin)
            db.session.commit()
            return f"Client with ID {admin_id} deleted"
        else:
            return f"Client with ID {admin_id} not found", 404