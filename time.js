(function(){
      // set the starting date (change to the date you need)
    const start = new Date('2025-06-27T00:00:00+02:00');
      const el = document.querySelector('.timer');

      function update() {
        const now = new Date();

        let years   = now.getFullYear()  - start.getFullYear();
        let months  = now.getMonth()     - start.getMonth();
        let days    = now.getDate()      - start.getDate();
        let hours   = now.getHours()     - start.getHours();
        let minutes = now.getMinutes()   - start.getMinutes();
        let seconds = now.getSeconds()   - start.getSeconds();

        if (seconds < 0) { seconds += 60; minutes--; }
        if (minutes < 0) { minutes += 60; hours--; }
        if (hours < 0)   { hours += 24; days--; }
        if (days < 0) {
          // days in the previous month relative to "now"
          const daysInPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
          days += daysInPrevMonth;
          months--;
        }
        if (months < 0) { months += 12; years--; }

        const pad = n => String(n).padStart(2, '0');
        el.textContent = ` Sritni vec ${months}m ${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
      }

      update();
      setInterval(update, 1000);
    })();