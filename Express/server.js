const express = require('express');
const app = express();
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
/*
commonly used method
1) app.get()
2)app.post()
3) app.put()
4) app.delete()
5) app.listen()
6) app.use()
*/