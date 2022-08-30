## Rede Neural para classificação de Tumor Cerebral
Foi utilizado um dataset público de Tumor Cerebral (https://www.kaggle.com/jakeshbohaju/brain-tumor) que contém duas classes: 
contém tumor e não contém tumor. Este dataset contém 3.762 amostras, distribuídas em 12 colunas. 

Os dados foram particionados em conjuntos de treinamento e teste, sendo estes dados separados aleatoriamente em ⅔ para treinamento
e ⅓ para teste. Foi feita a normalização dos dados antes do treinamento. Neste algoritmo, foram utilizadas 3 camadas densas 
intermediárias, sendo:
* 100 neurônios na primeira camada;
* 33 na segunda camada;
* 11 na terceira camada;
* 1 neurônio na camada de saída.

Outras características incluídas:
* Dropout: 0.1
* Função de ativação: sigmoid
* Método de treinamento: Adamax
* Épocas de treinamento: 1000
* Batch_size: 256 (sempre utilizar números de potência de 2)


### Resultados

#### Acurácia
![acuracia](https://user-images.githubusercontent.com/95611970/187555140-f8615837-b352-44a1-bbea-4d8d8808c1cd.jpg)

#### Perda
![perda](https://user-images.githubusercontent.com/95611970/187555162-0bdab575-a2b6-4612-8aa5-04dee66ab220.jpg)

#### Curva ROC
![curva_roc](https://user-images.githubusercontent.com/95611970/187555175-11dc35be-9d4a-46c2-bc35-9b93763f8ff1.jpg)

#### Matriz de Confusão
![matriz_de_confusao](https://user-images.githubusercontent.com/95611970/187555194-07ecea72-3005-4499-b975-9ca881a5050e.jpg)



