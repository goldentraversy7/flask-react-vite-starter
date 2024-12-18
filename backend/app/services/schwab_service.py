import os
import requests
from requests.auth import HTTPBasicAuth

# Load Schwab API credentials
SCHWAB_API_KEY = os.getenv("SCHWAB_API_KEY")
SCHWAB_API_SECRET = os.getenv("SCHWAB_API_SECRET")
SCHWAB_BASE_URL = "https://api.schwab.com"  # Replace with the correct base URL for Schwab API

class SchwabService:
    @staticmethod
    def get_order_history():
        """
        Fetch order history from Schwab API.
        """
        url = f"{SCHWAB_BASE_URL}/v1/accounts/orders"  # Replace with the correct endpoint for order history
        try:
            # Authenticate using API key and secret
            response = requests.get(
                url,
                auth=HTTPBasicAuth(SCHWAB_API_KEY, SCHWAB_API_SECRET),
                headers={"Content-Type": "application/json"},
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error fetching order history: {e}")
            return {"error": str(e)}
