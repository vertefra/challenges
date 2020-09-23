def hourglassSum(h):
    sums = []
    for y, line in enumerate(h):
        for x, value in enumerate(line):
            if x <= 3 and y <= 3:
                hr_gl = h[y][x]+h[y][x+1]+h[y][x+2] + \
                    h[y+1][x+1]+h[y+2][x]+h[y+2][x+1]+h[y+2][x+2]
                sums.append(hr_gl)
    return max(sums)
