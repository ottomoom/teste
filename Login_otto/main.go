package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "POST" {
			username := r.FormValue("username")
			password := r.FormValue("password")
			if username == "" || password == "" {
				fmt.Fprintf(w, "Por favor, preencha todos os campos!")
				return
			}

			http.ServeFile(w, r, "resultado.html")
		}
		http.ServeFile(w, r, "login.html")
	})
	http.ListenAndServe(":8080", nil)
}
