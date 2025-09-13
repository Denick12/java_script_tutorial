# Bills for each table in a day
bills = [120.50, 45.00, 89.75, 200.00, 65.25]
total_revenue = 0

for bill in bills:
    total_revenue += bill

print("Total revenue for the day: ${:.2f}".format(total_revenue))
