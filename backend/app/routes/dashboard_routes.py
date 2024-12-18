from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.services import SchwabService

# Define the Blueprint
dashboard_routes = Blueprint("dashboard_routes", __name__)

@dashboard_routes.route("/api/dashboard/schwab/order-history", methods=["GET"])
@jwt_required()
def get_order_history():
    """
    Retrieve Schwab order history for logged-in users.
    Ensures the user is authenticated before accessing data.
    """
    current_user = get_jwt_identity()  # Get the logged-in user's identity
    if not current_user:
        return jsonify({"message": "Unauthorized access", "status": 401}), 401

    # Call SchwabService to fetch order history
    order_history = SchwabService.get_order_history()
    if "error" in order_history:
        return jsonify({"message": "Failed to fetch order history", "error": order_history["error"], "status": 500}), 500

    return jsonify({"message": "Order history retrieved successfully", "data": order_history, "status": 200}), 200
