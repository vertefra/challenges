from main import make_anagrams


def test_make_anagrams(a: str = "cde", b: str = "abc"):
    letters_to_delete = make_anagrams(a, b)
    assert letters_to_delete == 4


def test_make_anagrams_2(a: str = "letters", b: str = "tesi"):

    # remove l => etters
    # remove r => ettes

    letters_to_delete = make_anagrams(a, b)
    assert letters_to_delete == 5
