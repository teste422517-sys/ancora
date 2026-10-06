# 1. Usa uma imagem oficial do Python leve
FROM python:3.12-slim

# 2. Define o diretório de trabalho dentro do container
WORKDIR /app

# 3. Copia o arquivo de dependências
COPY requirements.txt .

# 4. Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copia o restante do código
COPY . .

# 6. Expõe a porta
EXPOSE 5000

# 7. Comando para rodar a aplicação usando Uvicorn (compatível com WebSockets no Python 3.12)
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "5000"]
