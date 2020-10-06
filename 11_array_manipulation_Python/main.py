
query = [[1, 5, 3], [4, 8, 7], [6, 9, 1]]

q1 = query[0]


def arrayManipulation(n, queries):
    hash = {i: 0 for i in range(1, n+1)}
    for query in queries:
        a, b, k = query
        for key in range(a, b+1):
            hash[key] += k
    return max(hash.values())


print(arrayManipulation(10, query))
