
#!/bin/bash

set -e

# Resolve the directory containing this script
ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"

BACKEND_DIR="$ROOT_DIR/backend"
FRONTEND_DIR="$ROOT_DIR/frontend"

# Check project files
if [ ! -f "$BACKEND_DIR/pom.xml" ]; then
  echo "Error: Backend pom.xml not found."
  exit 1
fi

if [ ! -f "$FRONTEND_DIR/package.json" ]; then
  echo "Error: Frontend package.json not found."
  exit 1
fi

# Check prerequisites
command -v java >/dev/null 2>&1 || {
  echo "Error: Java is not installed or not on PATH."
  exit 1
}

command -v npm >/dev/null 2>&1 || {
  echo "Error: Node.js/npm is not installed or not on PATH."
  exit 1
}

# Make Maven wrapper executable
chmod +x "$BACKEND_DIR/mvnw"

# Install frontend dependencies if needed
if [ ! -d "$FRONTEND_DIR/node_modules" ]; then
  echo "Installing frontend dependencies..."
  (cd "$FRONTEND_DIR" && npm install)
fi

# Start backend
echo "Starting Spring Boot backend..."
cd "$BACKEND_DIR"
./mvnw spring-boot:run &
BACKEND_PID=$!

# Start frontend
echo "Starting React frontend..."
cd "$FRONTEND_DIR"
npm run dev -- --host 127.0.0.1 &
FRONTEND_PID=$!

# Stop both processes when the script exits
cleanup() {
  echo ""
  echo "Stopping backend and frontend..."
  kill "$FRONTEND_PID" "$BACKEND_PID" 2>/dev/null || true
  wait "$FRONTEND_PID" "$BACKEND_PID" 2>/dev/null || true
}

trap cleanup EXIT INT TERM

echo ""
echo "===================================="
echo " React:       http://localhost:5173"
echo " Spring Boot: http://localhost:8080"
echo "===================================="
echo "Press Ctrl+C to stop both."
echo ""

wait
