package main

import (
	"fmt"
	"sort"
)

func maximumToys(prices []int32, k int32) int32 {

	var (
		sum   int32
		count int32
	)

	sort.Slice(prices, func(i, j int) bool { return prices[i] < prices[j] })

	for _, p := range prices {
		sum += p
		if sum > k {
			sum -= p
			return count
		}
		count++
	}
	return count

}

func main() {
	prices := []int32{3, 7, 4, 2, 6}
	r := maximumToys(prices, 8)
	fmt.Println(r)
}
