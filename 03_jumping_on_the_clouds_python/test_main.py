import unittest
from main import jumps


class TestMainChallenge(unittest.TestCase):

    def setUp(self):
        # ==> expected output 4 // path [1,3,5,7]
        self.arr1 = [0, 0, 1, 0, 0, 0, 1, 0]
        # ==> expected output 6 //
        self.arr2 = [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
        self.arr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    def test_jumps(self):
        """ 
        test jumps function with base case 
        """
        self.assertEqual(jumps(self.arr1), 4, "Test with HR base case failed")

    def test_jumps_longer(self):
        """ 
        test jumps function with multiple repeating 0 case 
        """
        self.assertEqual(jumps(self.arr2), 6,
                         "Test with longere array with repeating 0 failed")

    def test_jumps_zeros_array(self):
        """ 
        test jumps function with only 0 case 
        """
        self.assertEqual(jumps(self.arr3), 5, "Test with only 0 array failed")


if __name__ == '__main__':
    unittest.main()
