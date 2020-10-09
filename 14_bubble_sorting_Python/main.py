def countSwaps(a: list):
    swapped = True
    swaps = 0
    i = 0
    while swapped == True:
        swapped = False
        for n in a:
            if n > a[i+1]:
                a[i], a[i+1] = a[i+1], a[i]
                print(a[i], a[i+1])
                swaps += 1
            swapped = True
        i += 1
    return a


a = [3, 4, 2, 6, 1]

print(countSwaps(a))
