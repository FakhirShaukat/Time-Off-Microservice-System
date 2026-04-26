# Time-Off Microservice with HCM Integration

A backend microservice that manages employee time-off requests while ensuring consistency with an external Human Capital Management (HCM) system.

This project demonstrates real-world backend architecture, including distributed system challenges, external API integration, and fault-tolerant design.

---

# Features

* Time-off request creation and validation
* Leave balance management
* Integration with external HCM system (simulated)
* Fault tolerance with fallback mechanisms
* Batch synchronization support
* Agentic decision-making behavior

---

# System Architecture

The system follows a modular backend architecture using NestJS.

## Modules

* Employees Module: Manages employee data
* Balances Module: Stores and manages leave balances
* Requests Module: Handles time-off request logic
* Sync Module: Simulates HCM integration

---

# Folder Structure

```
backend/
│── src/
│   │── employees/
│   │   ├── employee.entity.ts
│   │   ├── employees.module.ts
│   │   ├── employees.service.ts
│   │   ├── employees.controller.ts
│   │
│   │── balances/
│   │   ├── balance.entity.ts
│   │   ├── balances.module.ts
│   │   ├── balances.service.ts
│   │   ├── balances.controller.ts
│   │
│   │── requests/
│   │   ├── requests.entity.ts
│   │   ├── requests.module.ts
│   │   ├── requests.service.ts
│   │   ├── requests.controller.ts
│   │
│   │── sync/
│   │   ├── sync.module.ts
│   │   ├── sync.service.ts
│   │   ├── sync.controller.ts
│   │
│   │── app.module.ts
│   │── main.ts
│
│── database.sqlite
│── package.json
│── tsconfig.json
```

---

# Workflow Overview

## Time-Off Request Flow

1. Employee submits request
2. System checks local balance
3. System calls HCM for validation
4. Decision is made:

   * Approved
   * Rejected
   * Fallback (if HCM fails)
5. Request is stored in database

---

## HCM Sync Flow

1. HCM sends batch updates
2. Sync module receives data
3. System updates local balance cache

---

# Agentic System Behavior

This system follows agentic design principles:

* Autonomous Decision Making: Each request is evaluated independently
* External Collaboration: Integrates with HCM system
* Fault Adaptation: Handles failures gracefully
* State Awareness: Maintains and updates balance state

---

# Tech Stack

* Backend Framework: NestJS
* Database: SQLite
* ORM: TypeORM
* Language: TypeScript

---

# Installation and Setup

```
# Clone the repository
git clone <your-repo-url>

# Navigate to project
cd backend

# Install dependencies
npm install

# Run the application
npm start
```

---

# API Endpoints

## Create Balance

POST /balances

Request Body:

```
{
  "employeeId": 1,
  "locationId": 1,
  "totalDays": 10,
  "usedDays": 0
}
```

---

## Create Time-Off Request

POST /requests

Request Body:

```
{
  "employeeId": 1,
  "daysRequested": 3
}
```

Possible Responses:

```
{
  "status": "approved"
}
```

```
{
  "status": "rejected"
}
```

---

## Batch Sync (HCM Simulation)

POST /sync/batch

Request Body:

```
[
  { "employeeId": 1, "totalDays": 15 },
  { "employeeId": 2, "totalDays": 20 }
]
```

---

# Testing Scenarios

## Functional Tests

* Valid request → Approved
* Insufficient balance → Rejected
* HCM rejection → Rejected
* HCM failure → Fallback logic triggers

---

## Edge Cases

* Zero or negative days → Rejected
* Multiple sequential requests → Balance updates correctly
* Concurrent requests → No over-allocation

---

## Integration Tests

* HCM validation affects decision
* Batch sync updates system state

---

# Error Handling

* HCM failure → fallback to local validation
* Invalid input → request rejected
* Data inconsistency → HCM takes precedence

---

# Consistency Model

* Eventual Consistency → Local balance cache
* Strong Consistency → Request approval via HCM

---

# Limitations

* No frontend (backend only)
* HCM is simulated
* No authentication system

---

# Future Enhancements

* Real HCM API integration
* Manager approval workflow
* Notification system
* Frontend dashboard
* Role-based access control

---

# Project Highlights

* Distributed system design
* External API integration
* Fault-tolerant architecture
* Clean modular backend structure

---

# Author

Fakhir Shaukat

---

# Notes

This project was developed as part of an assignment focusing on agentic system design and backend architecture. The emphasis is on system behavior, decision-making, and resilience rather than UI implementation.
