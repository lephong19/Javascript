I. Khái niệm
- Event loop là cơ chế điều phối việc thực thi code bất đồng bộ trong 

- Phối hợp chủ yếu với: 
Call Stack
Web APIs / Node APIs
Task Queue
Microtask Queue
Event Loop

-> Mục tiêu: Khi Call Stack đang bận , các tác vụ bất đồng bộ không chặn chương trình. Khi Stack rảnh , Event Loop đưa callback phù hợp vào Stack để chạy

- Call Stack là gì?: Là nơi JavaScript theo dõi các function được thực thi , cơ chế :LIFO

                 JavaScript
                     │
                     ↓
                Call Stack
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
    Synchronous            Async operation
                                │
                         Runtime / Node APIs
                                │
                    ┌───────────┴───────────┐
                    ↓                       ↓
             Microtask Queue          Task Queue
             Promise.then             setTimeout
             catch/finally            setInterval
             queueMicrotask           ...
                    │
                    └───────┐
                            ↓
                       Event Loop
                            │
                     Stack có rỗng?
                            ↓
                     Microtask trước
                            ↓
                         Task sau