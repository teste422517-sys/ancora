# 1. Usa uma imagem oficial do Python leve
FROM python:3.12-slim

# 2. Define o diretório de trabalho dentro do container
WORKDIR /app

# 3. Copia apenas o requirements.txt de dentro da pasta do backend para o container
COPY new_backend-main/requirements.txt .

# 4. Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copia todo o conteúdo da pasta do backend para dentro de /app no container
COPY new_backend-main/ .

# 6. Expõe a porta que o servidor vai usar
EXPOSE 5000

# 7. Comando para rodar a aplicação Flask com Socket.IO (Eventlet)
CMD ["gunicorn", "--worker-class", "eventlet", "-w", "1", "-b", "0.0.0.0:5000", "app:app"]
