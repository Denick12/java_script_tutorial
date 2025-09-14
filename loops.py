# Bills for each table in a day
bills = [120.50, 45.00, 89.75, 200.00, 65.25]
total_revenue = 0

for bill in bills:
    total_revenue += bill

print("Total revenue for the day: ${:.2f}".format(total_revenue))

cart = [12.99, 23.50, 9.75, 60, 40]
total = 0

for price in cart:
    total += price

print("Total price: ${:.2f}".format(total))

grades = [75, 88, 92, 64, 80]
total = 0

for grade in grades:
    total += grade

average = total / len(grades)
print("Average grade:", average)


nums = [1, 2, 3, 4]   # Example input list
nums_doubled = []

i = 0
while i < len(nums):
    num = nums[i]
    nums_doubled.append(num * 2)
    i+=1

print(nums_doubled)

# alternatively
nums = [1, 2, 3, 4]
nums_doubled = [num * 2 for num in nums]
print(nums_doubled)


