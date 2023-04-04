/*
Otto Enoc Hermano Smelan de Oliveira - TIA: 32240708

1. Escreva e teste uma função que gera e retorna um vetor alocado dinamicamente de tamanho N com números gerados aleatoriamente entre 0 e 1000, considere que N é informado
por parâmetro ao método.
Dica: pesquise a função rand() talvez ela posso lhe ajudar.
http://www.cplusplus.com/reference/cstdlib/rand/

*/

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int* gerar_vetor_aleatorio(int N) {
    int* vetor = (int*) malloc(N * sizeof(int)); // aloca vetor dinamicamente
    if(vetor == NULL) { // verifica se houve erro na alocação
        printf("Erro ao alocar vetor dinamicamente!\n");
        return NULL;
    }
    srand(time(NULL)); // inicializa gerador de números aleatórios com semente baseada no tempo atual
    for(int i = 0; i < N; i++) {
        vetor[i] = rand() % 1001; // gera número aleatório entre 0 e 1000 e armazena no vetor
    }
    return vetor; // retorna o vetor gerado
}

int main() {
    int N;

    printf("Digite o tamanho do vetor:");
    scanf("%d", &N);

    int* vetor = gerar_vetor_aleatorio(N);
    
    if(vetor != NULL) {
        printf("Vetor gerado: ");
        for(int i = 0; i < N; i++) {
            printf("%d ", vetor[i]);
        }
        printf("\n");
        free(vetor); // libera memória alocada para o vetor
    }
    return 0;
}