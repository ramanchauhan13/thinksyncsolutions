"use client";

import { useEffect } from "react";
import { sendEmail } from "@/lib/emailjs";

export default function VisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const alreadyTracked =
          sessionStorage.getItem("tracked");

        if (alreadyTracked) return;

        sessionStorage.setItem("tracked", "true");

        // Call your own backend
        const res = await fetch("/api/track", {
          method: "POST",
        });

        const data = await res.json();

        const browser = navigator.userAgent;

        const device =
          window.innerWidth < 768
            ? "Mobile"
            : "Desktop";

        await sendEmail({
          name: "Website Visitor",
          email: "visitor@thinksync.solutions",
          subject: "New Visitor",
          message: `
IP: ${data.ip}

Country: ${data.country}

Region: ${data.region}

City: ${data.city}

Browser: ${browser}

Device: ${device}

Page: ${window.location.href}

Referrer:
${document.referrer || "Direct"}

Time:
${new Date().toLocaleString()}
          `,
        });

        console.log("Visitor tracked");
      } catch (err) {
        console.log(err);
      }
    };

    trackVisitor();
  }, []);

  return null;
}