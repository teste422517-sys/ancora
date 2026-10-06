# 1. Usa uma imagem oficial do Python leve
FROM python:3.12-slim

# 2. Define o diretório de trabalho dentro do container
WORKDIR /app

# 3. Copia o arquivo de dependências diretamente da raiz do contexto atual
COPY requirements.txt .

# 4. Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copia o restante do código para dentro do container
COPY . .

# 6. Expõe a porta que o servidor vai usar
EXPOSE 5000

# 7. Comando para rodar a aplicação Flask com Socket.IO (Eventlet)
CMD ["gunicorn", "--worker-class", "eventlet", "-w", "1", "-b", "0.0.0.0:5000", "app:app"]
