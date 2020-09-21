def minimumSwaps(arr):
    i = 0
    tot_swaps = 0
    swapped = True
    while swapped == True:
        while i < len(arr)-2:
            swapped = False
            if (arr[i] > arr[i+1]):
                t = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = t
                swapped = True
                tot_swaps += 1
            i += 1
    return tot_swaps


a = [1, 3, 53, 2, 54, 3, 45]

print(minimumSwaps(a))
