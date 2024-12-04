from app.routes.auth_routes import auth_routes  # Import your auth blueprint

# Initialize a list of blueprints
blueprints = [
    auth_routes,  # Add other blueprints here as you create them
]
