// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Access with httpie in terminal with `http :3000/api/hello`
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
