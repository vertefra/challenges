import unittest
from main import hourglassSum


class TestMain(unittest.TestCase):

    def setUp(self):
        self.matrix = [
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 2, 4, 4, 0],
            [0, 0, 0, 2, 0, 0],
            [0, 0, 1, 2, 4, 0]
        ]

    def test_main(self):
        """
        test glass_hour function with 6x6 matrix
        """
        self.assertEqual(hourglassSum(self.matrix), 19,
                         "The total value is not equal to 19")


if __name__ == '__main__':
    unittest.main()
