from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_register_and_login():
    response = client.post("/register", json={"username": "testuser", "password": "testpass"})
    assert response.status_code == 200 or response.status_code == 400
    response = client.post("/token", data={"username": "testuser", "password": "testpass"})
    assert response.status_code == 200
    assert "access_token" in response.json() 