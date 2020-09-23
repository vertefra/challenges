Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus or **2**. She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered if they are safe or if they must be avoided. For example, c=[0,1,0,0,0,1,0] indexed from **0...6** . The number on each cloud is its index in the list so she must avoid the clouds at indexes and . She could follow the following two paths: **0->2->4->6** or **0->2->3->4->6** . The first path takes **3** jumps while the second takes **4**.

Function Description

Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

c: an array of binary integers
