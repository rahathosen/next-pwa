"use client";
import Header from "@/components/core/Header";
import { useState } from "react";

const page = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "reminder",
      message: "Your payment of 500 BDT is due in 3 days.",
      isRead: false,
    },
    {
      id: 2,
      type: "offer",
      message: "Special Offer: Get 10% off on Gold exchanges this week!",
      isRead: false,
    },
    {
      id: 3,
      type: "rate-alert",
      message: "Gold rate has increased by 0.5%.",
      isRead: false,
    },
  ]);

  // Mark a notification as read
  const markAsRead = (id: any) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification,
      ),
    );
  };

  // Remove notification
  const removeNotification = (id: any) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id),
    );
  };
  return (
    <>
      <div className="p-4">
        <Header title="Notification" />
      </div>
      {/* notification  */}

      <div className="container mx-auto p-6 dark:bg-neutral-900 dark:text-neutral-100">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Notifications & Alerts</h2>

          {/* Notification List */}
          <div className="rounded-lg bg-neutral-100 p-4 shadow-md dark:bg-neutral-800">
            <h3 className="mb-2 text-lg font-semibold">Your Notifications</h3>
            <ul>
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`border-b border-neutral-300 py-2 dark:border-neutral-700 ${notification.isRead ? "bg-neutral-200 dark:bg-neutral-600" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`text-sm ${notification.type === "reminder" ? "text-red-500" : notification.type === "offer" ? "text-green-500" : "text-yellow-500"}`}
                    >
                      {notification.message}
                    </div>
                    <div className="ml-4">
                      {!notification.isRead && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="rounded-md bg-blue-600 px-2 py-1 text-xs text-white"
                        >
                          Mark as Read
                        </button>
                      )}
                      <button
                        onClick={() => removeNotification(notification.id)}
                        className="ml-2 text-xs text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
