require_relative "main"
require "test/unit"

class TestMain < Test::Unit::TestCase

    def setup
        @rotate_array = RotateArray.new()
        @arr_test_1 = [1,4,5,23,53,1,43,54,23,54,6,3 ]
        @solution_1 = "43 54 23 54 6 3 1 4 5 23 53 1"
        @d_1 = 6
        @arr_test_2 = [1, 0, 4, 2, 4, 4]
        @d_2 = 6
        @solution_2 = "1 0 4 2 4 4"
    end

    def teardown
    end

    def test_main
        assert_equal(@solution_1, @rotate_array.rotLeft( @arr_test_1, @d_1), "testing parital rotation by 6")
        assert_equal(@solution_2, @rotate_array.rotLeft( @arr_test_2, @d_2), "testing complete rotation by 6")
    end
end