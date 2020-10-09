import unittest
import unittest.mock
import io
from main import countSwaps


class TestSwapArray(unittest.TestCase):
    def setUp(self):
        self.arr = [6, 4, 1]

    @unittest.mock.patch('sys.stdout', new_callable=io.StringIO)
    def runTest(self, mock_stdout):
        countSwaps(self.arr)
        self.assertEquals(mock_stdout.getvalue(), '''Array is sorted in 3 swaps.
                          First Element: 1
                          Last Element: 6''')


if __name__ == '__main__':
    unittest.main()
