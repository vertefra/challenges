
def jumps(array_of_clouds):
    path = []
    current_idx = 0
    while current_idx < len(array_of_clouds)-3:
        next_1 = current_idx + 1
        next_2 = current_idx + 2
        if (array_of_clouds[next_2] != 1):
            path.append(next_2)
            current_idx = next_2
        elif (array_of_clouds[next_1] != 1):
            path.append(next_1)
            current_idx = next_1
    path.append(len(array_of_clouds)-1)
    return len(path)
