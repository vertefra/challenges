import unittest
from functools import cmp_to_key

from main import Player

class TestSorterMethod(unittest.TestCase):

    
    def setUp(self):
        self.data = []

        values = [
            'aleska 150',
            'amy 100',
            'david 100',
            'aakansha 75',
            'heraldo 50'
        ]

        for i in values:
            name, score = i.split(' ')
            self.player = Player(name, score)
            self.data.append(self.player)

    def test_sorter_method(self):
        self.data = sorted(self.data, key=cmp_to_key(self.player.comparator))
        print(self.data)
        self.assertEqual(self.data[0].name, "aleska")
        self.assertEqual(self.data[1].name, "amy")
        self.assertEqual(self.data[2].name, "david")
        self.assertEqual(self.data[3].name, "aahansha")
        self.assertEqual(self.data[4].name, "heraldo")



if __name__ == '__main__':
    unittest.main()