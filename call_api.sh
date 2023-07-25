API_URL="https://leetcode-hints-backend.onrender.com/api/hints"

while true; do
	curl -X GET "$API_URL"
	sleep 1000
done
