const sorryTxt = String.raw`21,21,21,5e,5e,5e,5e,72,2b,2b,3d,3d,3d,3e,3e,3e,3c,3c,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,3c,3c,3c,3d,3d,3d,3d,2b,2b,72,5e,5e,5e,5e,5e,5e,21,21,21,21,21,21,21,21,21,21,21,21,21,5e,5e,5e,5e,5e,5e,72,2b,2b,3d,3e,3c,3c,2a,2a,2a,3f,0a,3b,3b,3b,21,21,21,5e,5e,5e,5e,5e,5e,72,2b,2b,2b,2b,3d,3d,3d,3d,3e,3d,3e,3c,3c,3e,3e,3e,3e,3c,3c,3e,3d,3d,37,79,45,55,58,45,35,73,2a,5e,5e,5e,21,21,21,21,21,21,21,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,21,21,5e,5e,5e,5e,5e,72,2b,3d,3d,3c,3c,2a,2a,0a,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,5e,5e,5e,5e,5e,5e,5e,72,2b,2b,2b,2b,2b,2b,2b,2b,3d,3d,3d,3d,3d,2b,69,64,4e,23,26,51,51,51,51,51,4e,53,7c,21,21,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,21,5e,5e,5e,72,2b,2b,3d,3d,3c,3c,0a,7e,7e,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,21,21,21,5e,5e,5e,5e,5e,5e,5e,5e,5e,72,72,2b,72,2b,2b,2a,67,23,23,26,51,51,23,23,42,51,51,51,51,7a,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,5e,5e,5e,5e,5e,72,2b,2b,3d,3e,0a,7e,7e,7e,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,21,21,21,5e,5e,5e,5e,5e,5e,5e,5e,72,2b,2b,50,42,42,23,51,26,62,66,6a,74,49,44,51,51,71,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,5e,5e,5e,5e,5e,72,2b,3d,3d,0a,7e,7e,7e,7e,7e,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,3b,21,21,21,21,5e,5e,5e,5e,5e,5e,5e,2b,3d,3d,55,51,44,6b,6b,6d,79,7a,6d,58,61,58,51,51,6a,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,5e,5e,5e,5e,72,2b,3d,0a,7e,7e,7e,7e,7e,7e,7e,7e,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,21,5e,5e,5e,5e,2b,2b,3d,3e,7a,4e,6a,7c,5c,7a,3f,5e,7a,63,2a,69,25,71,5e,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,5e,5e,5e,5e,72,2b,3d,0a,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,5e,5e,5e,5e,3d,2a,4c,5c,37,66,6e,5c,4c,37,59,78,63,37,7a,49,50,5e,3b,21,21,21,21,21,21,21,21,21,21,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,5e,5e,5e,5e,5e,2b,2b,0a,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,3b,7e,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,72,3c,3f,7c,4c,69,76,7a,74,59,7a,7a,61,45,61,7d,37,7a,37,5e,5e,5e,5e,5e,5e,21,21,21,21,21,21,21,21,21,21,21,21,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,5e,5e,5e,5e,5e,2b,2b,0a,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,21,5e,2b,2a,7c,4c,4c,4c,5c,76,7a,4a,74,66,79,7d,6a,6a,73,53,6a,5e,5e,2b,72,5e,5e,5e,5e,5e,5e,5e,21,21,21,21,21,21,21,21,21,21,21,5e,21,21,21,21,21,21,21,5e,5e,5e,5e,5e,2b,2b,0a,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,3b,3b,3b,3b,3b,3b,3b,3b,21,5e,2b,3c,3f,7c,7c,4c,69,5c,37,37,49,58,5e,37,66,68,6b,5a,74,5e,6a,63,3d,3d,3d,2b,72,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,2b,2b,0a,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,3b,3b,3b,3b,3b,3b,3b,21,5e,2b,3c,2a,2a,7c,4c,69,5c,73,5a,4b,51,51,7e,2e,21,4c,54,5e,27,20,4b,51,52,45,7d,69,3d,2b,72,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,2b,2b,0a,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,7e,3b,3b,3b,3b,3b,3b,3b,21,5e,3e,2a,2a,69,7d,45,44,42,51,51,51,51,51,58,3a,27,60,60,60,2c,2c,42,51,51,51,51,51,51,67,36,35,69,5e,5e,5e,5e,5e,5e,5e,5e,5e,72,72,72,72,72,2b,2b,2b,2b,72,72,72,72,72,2b,2b,3d,0a,7e,7e,7e,7e,7e,7e,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,5e,2b,2a,3f,6d,51,51,51,51,51,51,51,51,51,51,51,3b,20,20,20,20,20,3b,51,51,51,51,51,51,51,51,51,51,51,6e,2b,2b,2b,72,72,72,72,72,2b,2b,2b,2b,2b,2b,2b,2b,2b,2b,2b,2b,2b,2b,2b,3d,3d,0a,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,72,3e,2a,7c,62,51,51,51,51,51,51,51,51,51,51,51,55,60,20,20,20,20,79,51,51,51,51,51,51,51,51,51,51,51,41,2b,2b,2b,2b,72,72,72,2b,2b,2b,2b,2b,2b,2b,3d,3d,3d,3d,3d,3d,3d,3d,3d,3d,3d,0a,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,5e,2b,3e,3f,78,51,51,51,51,51,51,51,51,51,51,51,51,51,3c,20,20,20,2c,4e,51,51,51,51,51,51,51,51,51,51,51,51,7c,3d,3d,2b,2b,2b,2b,2b,2b,2b,2b,3d,3d,3d,3d,3d,3e,3e,3e,3e,3d,3e,3e,3e,3e,0a,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,5e,5e,3d,2a,4c,71,51,51,51,51,51,51,51,51,51,51,51,51,51,64,20,20,20,7a,51,51,51,51,51,51,51,51,51,51,51,51,51,5a,3c,3c,3c,3e,3d,3d,3d,3d,3d,3d,3d,3e,3d,3d,3e,3c,3c,3c,3c,3c,3c,3c,3c,3c,0a,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,21,5e,2b,3c,7c,5c,25,51,51,51,51,51,51,51,51,51,51,51,51,51,51,21,20,60,25,51,51,51,51,51,51,51,51,51,40,51,51,51,52,4c,2a,3c,3c,3c,3c,3e,3e,3e,3e,3e,3e,3e,3c,3c,3c,3c,3c,3c,3c,3c,3c,3c,3c,0a,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,21,5e,5e,3d,2a,7c,69,74,51,51,51,51,51,40,51,51,51,51,51,51,51,51,51,45,20,3d,51,51,51,51,51,51,51,51,51,40,51,51,40,51,51,4b,2a,2a,2a,2a,2a,3c,3c,3c,3c,3c,3c,3c,3c,3c,2a,2a,2a,2a,2a,2a,2a,2a,2a,0a,3b,3b,3b,3b,3b,3b,3b,3b,3b,3b,21,21,21,21,21,5e,2b,3e,3f,7c,4c,5c,5a,51,51,51,51,40,40,51,51,51,51,51,51,51,51,51,51,21,55,51,51,51,51,51,40,40,40,40,40,40,51,51,51,51,4b,3f,3f,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,2a,0a,21,21,21,21,21,21,21,21,21,21,21,21,21,5e,5e,2b,3c,3f,7c,4c,69,76,4e,51,51,51,51,51,40,40,51,51,51,51,51,51,51,51,51,38,51,51,51,51,51,51,40,40,40,40,40,40,51,51,51,51,51,4c,7c,7c,3f,3f,3f,3f,3f,3f,3f,3f,3f,2a,3f,3f,3f,2a,2a,2a,2a,2a,2a,3f,0a,21,21,21,21,21,21,21,21,21,21,21,21,5e,5e,2b,3c,3f,3f,7c,4c,5c,37,67,51,51,51,51,51,40,40,51,51,51,51,51,51,51,51,51,51,51,51,51,51,40,40,40,40,40,40,40,40,51,51,51,51,42,69,4c,7c,7c,7c,7c,3f,3f,7c,3f,7c,7c,7c,7c,7c,7c,7c,3f,2a,2a,2a,2a,3f,0a,5e,5e,21,5e,5e,5e,5e,5e,21,21,5e,5e,5e,2b,3e,2a,7c,7c,4c,69,54,7a,4e,51,51,40,40,40,40,40,51,51,51,51,51,51,51,51,51,40,51,51,51,40,40,40,40,40,40,40,40,40,40,51,51,40,51,6a,4c,4c,4c,4c,7c,7c,7c,7c,7c,7c,7c,7c,7c,7c,7c,7c,7c,7c,7c,3f,3f,3f,0a,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,5e,72,3d,3c,7c,7c,4c,69,5c,76,78,51,51,51,51,51,51,40,40,40,51,51,51,51,51,51,51,51,51,51,51,51,40,40,40,40,40,40,40,51,51,51,51,51,40,51,6b,69,69,4c,4c,4c,4c,4c,7c,4c,4c,4c,7c,7c,4c,4c,4c,4c,4c,4c,7c,7c,7c,0a,5e,5e,5e,5e,5e,72,5e,72,5e,72,5e,72,2b,3c,3f,4c,69,69,69,5c,37,7a,77,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,40,51,51,51,40,40,40,40,40,51,51,51,51,51,51,51,51,4b,76,5c,5c,69,69,69,69,4c,4c,4c,4c,4c,4c,4c,4c,69,69,69,69,69,4c,4c,4c,0a,2b,2b,5e,2b,2b,2b,2b,2b,2b,2b,3d,3d,3c,2a,7c,4c,69,69,69,5c,37,4a,78,4b,51,51,51,51,51,51,51,51,51,51,51,51,51,51,40,40,51,51,51,51,40,40,40,40,51,51,51,51,51,51,51,50,76,37,54,63,5c,69,69,69,69,4c,69,69,69,69,69,69,5c,5c,63,63,5c,69,69,69,0a,3d,3d,3d,2b,3d,3d,3d,3d,3d,3e,3c,3c,2a,7c,4c,69,69,69,63,37,7a,4a,73,78,53,51,51,51,51,51,51,51,51,51,51,51,51,40,40,40,51,51,51,51,51,51,51,51,51,51,51,51,51,51,68,7a,37,37,37,54,63,63,5c,5c,5c,69,69,5c,5c,5c,63,63,54,54,54,54,54,5c,5c,69,0a,3e,3e,3d,3d,3d,3d,3d,3d,3e,3c,3c,2a,3f,7c,69,69,5c,5c,76,37,7a,4a,4a,74,78,6a,67,51,51,51,51,51,51,51,25,7a,79,57,67,44,67,44,7a,55,51,51,51,51,51,51,51,40,51,6a,4a,7a,7a,37,37,37,76,54,54,63,5c,63,63,63,63,54,54,76,76,37,37,37,37,37,76,54,0a,3c,3c,3c,3c,3c,3c,3c,3c,3c,2a,2a,3f,7c,4c,69,69,63,37,37,7a,7a,4a,74,78,49,7b,25,51,40,40,51,51,51,66,60,20,20,27,21,3b,3b,21,5f,60,2a,51,51,51,51,51,40,42,79,7b,78,4a,7a,7a,37,37,37,76,76,76,76,76,37,37,37,37,37,37,37,37,37,37,37,37,37,37,0a,2a,2a,3c,3c,3c,2a,2a,2a,2a,3f,3f,7c,69,69,5c,63,54,37,7a,7a,7a,4a,78,78,49,77,51,51,51,40,40,51,44,27,20,60,3c,7c,5e,5e,2b,3c,7b,61,78,54,52,40,40,40,40,51,79,7d,49,4a,7a,7a,7a,37,37,37,37,37,37,37,37,37,37,7a,7a,7a,7a,7a,7a,7a,7a,7a,7a,7a,0a,3f,3f,2a,2a,2a,2a,2a,2a,2a,7c,7c,4c,69,63,54,37,37,7a,7a,7a,4a,74,73,49,6e,52,51,51,51,51,51,40,40,51,50,53,6b,79,7d,4a,37,5c,37,6a,35,26,40,40,40,40,40,40,77,7b,49,74,4a,7a,7a,7a,7a,7a,7a,7a,7a,7a,7a,7a,7a,7a,7a,7a,7a,7a,7a,7a,4a,4a,4a,4a,0a,7c,7c,7c,7c,7c,3f,3f,7c,7c,7c,4c,5c,54,76,37,37,37,7a,7a,4a,4a,78,49,75,7d,51,51,51,51,51,51,40,40,51,51,23,25,4b,77,61,6d,45,71,67,51,40,40,40,40,40,40,40,4b,7d,6e,73,74,74,4a,4a,7a,7a,7a,7a,7a,4a,4a,4a,4a,4a,4a,4a,4a,4a,74,74,74,78,78,78,0a,4c,4c,7c,7c,7c,7c,7c,7c,4c,69,5c,54,37,37,37,37,37,7a,4a,74,49,6e,7b,7d,53,51,51,51,51,51,40,40,40,51,23,23,38,67,51,51,51,51,51,40,40,40,40,40,40,40,40,40,4e,7d,75,59,73,78,78,78,74,74,74,74,74,74,74,74,74,74,74,74,78,78,73,73,49,49,49,59,0a,69,69,4c,4c,4c,4c,4c,69,69,63,37,37,37,7a,7a,7a,7a,7a,78,49,75,7d,7d,7d,4b,51,51,51,51,51,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,51,6a,7b,75,6e,6e,59,49,49,73,73,73,49,73,73,73,73,73,49,49,49,59,59,6e,6e,6e,75,75,0a,5c,63,5c,69,69,69,5c,5c,63,54,37,37,7a,7a,7a,7a,4a,4a,73,59,75,7d,7d,66,6a,58,42,51,51,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,67,6a,7d,7b,75,75,75,75,6e,59,59,6e,59,59,59,59,59,6e,6e,6e,6e,6e,75,75,7b,7d,7d,7d,0a,54,54,54,54,63,63,54,37,37,7a,7a,7a,7a,7a,7a,4a,74,49,59,7b,7d,7d,66,6a,6a,6f,44,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,51,6f,6a,66,7d,7d,7b,7b,75,75,75,75,75,75,6e,59,59,6e,6e,75,75,75,75,7b,7b,7d,7d,7d,7d,0a,37,37,37,76,76,37,37,37,7a,4a,4a,74,74,74,74,78,73,59,7b,7d,7d,66,6a,6a,79,6f,62,51,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,26,35,6a,6a,66,66,7d,7d,7d,7d,7d,7d,7b,7b,75,75,75,75,7b,7b,7d,7d,7b,7d,7d,7d,66,66,66,0a,7a,7a,37,37,37,37,7a,7a,7a,74,73,73,49,59,49,59,6e,7b,7d,66,6a,6a,6a,79,79,61,41,51,40,40,40,40,40,40,40,40,40,40,51,40,40,40,40,40,40,40,40,40,40,40,40,25,6f,6a,6a,6a,6a,6a,66,66,66,7d,7d,66,7d,66,66,66,7d,7d,7d,7d,66,7d,66,66,66,66,6a,6a,0a,7a,7a,7a,7a,7a,7a,4a,4a,74,73,6e,6e,6e,7b,7b,7b,7d,7d,66,6a,6a,79,6a,79,35,61,58,51,40,40,40,40,40,40,40,40,40,40,4e,40,40,40,40,40,40,40,40,40,40,40,40,36,6f,79,79,6a,6a,6a,6a,6a,66,66,66,66,66,66,66,66,66,66,66,66,66,6a,6a,6a,6a,6a,6a,6a,0a,7a,4a,4a,4a,4a,4a,78,49,59,75,75,7b,7b,7b,7d,7d,66,6a,6a,6a,6a,6a,79,35,61,53,6b,51,40,40,40,40,40,40,40,40,40,40,25,51,40,40,40,40,40,40,40,40,40,40,51,77,6f,35,79,79,79,6a,6a,6a,6a,6a,6a,6a,6a,6a,6a,6a,6a,6a,6a,6a,6a,6a,6a,6a,6a,79,79,79`;

export const getSorryText = () => {
  var hex = sorryTxt.replace(/,/gi, "");
  var str = "";
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
};