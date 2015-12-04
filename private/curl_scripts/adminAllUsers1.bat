echo token may have expired

curl -X GET -k ^
   -H "content-type:application/json"  ^
	 -H "x-access-token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0NDk4NzAyNzAzNzQsInVzZXIiOnsibmFtZSI6InJsYWNleTEiLCJyb2xlIjoidXNlciIsInVzZXJuYW1lIjoicmxhY2V5MUBleGFtcGxlLmNvbSJ9fQ.xcXm1JpjIa9-ka5rl60Z_sgCxwkRWrc5jvoqeOU7EoU" ^
	 -H "x-key:rlacey2@example.com" ^
	 https://localhost:3443/api/v1/admin/users
					 