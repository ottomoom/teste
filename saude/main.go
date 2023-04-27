package main

//conecção ao index.html
//#

//conecção ao mysql
import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	_, err := sql.Open("mysql", "root:cubone103@tcp(localhost:3306)/teste_sangue")
	if err != nil {
		panic(err)
	}
	//test
	fmt.Printf("Conectado!")
}

//funçao que adiciona arquivos ou Db teste_sabgue
//#
//função que remove dados do Db teste_sangue
//#
