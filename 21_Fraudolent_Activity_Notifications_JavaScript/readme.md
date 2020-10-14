HackerLand National Bank has a simple policy for warning clients about possible fraudulent account activity. If the amount spent by a client on a particular day is greater than or equal to **2x** the client's median spending for a trailing number of days, they send the client a notification about potential fraud. The bank doesn't send the client any notifications until they have at least that trailing number of prior days' transaction data.

Given the number of trailing days **d** and a client's total daily expenditures for a period of days, find and print the number of times the client will receive a notification over all **n** days.

For example, **d=3** and **expenditures=[10,20,30,40,50]** . On the first three days, they just collect spending data. At day **4**, we have trailing expenditures of **[10,20,30]**. The median is **20** and the day's expenditure is **40**. Because **40>=2x20**, there will be a notice. The next day, our trailing expenditures are **[20,30,40]** and the expenditures are **50**. This is less than **2x30** so no notice will be sent. Over the period, there was one notice sent.

**Note**: The median of a list of numbers can be found by arranging all the numbers from smallest to greatest. If there is an odd number of numbers, the middle one is picked. If there is an even number of numbers, median is then defined to be the average of the two middle values. (Wikipedia)

**Function Description**

Complete the function activityNotifications. It must return an integer representing the number of client notifications.

activityNotifications has the following parameter(s):

- expenditure: an array of integers representing daily expenditures
- d: an integer, the lookback days for median spending
