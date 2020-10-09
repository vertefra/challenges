def countSwaps(a: list):
    swapped = True
    swaps = 0
    while swapped == True:
        swapped = False
        for idx in range(0, len(a)-1):
            cur = a[idx]
            nxt = a[idx+1]
            if cur > nxt:
                a[idx], a[idx + 1] = a[idx + 1], a[idx]
                swapped = True
                swaps += 1

    print(f'Array is sorted in {swaps} swaps')
    print(f'First Element: {a[0]}')
    print(f'Last Element: {a[-1]}')
