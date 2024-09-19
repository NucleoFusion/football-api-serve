package main

import "net/http"

func main() {
	fsHome := http.FileServer(http.Dir("./static"))
	http.Handle("/", fsHome)

	http.ListenAndServe(":3333", nil)
}
