class RotateArray
    def rotLeft a, d
        a = (a + a.slice!(0,d)).join(' ')
    end
end


