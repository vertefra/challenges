# Complete the make_anagram function that must return an integer representing
# the minimum total characters that must be deleted to make the strings
# anagrams
# the function has parameters
# a: str
# b: str
# both lowercase strings from english ASCII aplphabet [a..z]
# print a single integer denoting the number of characters you must delete
# to make
# the two strings anagram
# of each other
#
#
#  a:cde b:abc => expected result -> 4

def make_dict(string: str) -> dict:
    str_dict = {}
    for let in string:
        if let not in str_dict.keys():
            str_dict[let] = 1
        else:
            str_dict[let] += 1
    return str_dict


def make_anagrams(a: str, b: str) -> int:
    a_map = make_dict(a)
    b_map = make_dict(b)
    print(a_map)
    print(b_map)
    count = 0

    for k in a_map:
        if k not in b_map.keys():
            count += a_map[k]
        elif a_map[k] > b_map[k]:
            # case has one letter present with more frequency than string b
            # add to the count the difference
            count += (a_map[k] - b_map[k])

    for k in b_map:
        if k not in a_map.keys():
            count += b_map[k]
        elif b_map[k] > a_map[k]:
            # case has one letter present with more frequency than string a
            # add to the count the difference
            count += (b_map[k] - a_map[k])

    return count
