from app.routes.auth_routes import auth_routes  # Import your auth blueprint
from app.routes.dashboard_routes import dashboard_routes  # Import your dashboard blueprint

# Initialize a list of blueprints
blueprints = [
    auth_routes,  # Add other blueprints here as you create them
    dashboard_routes,
]
