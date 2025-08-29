FROM golang:1.24 AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build -o backend .

FROM debian:bookworm-slim

WORKDIR /root/

COPY --from=builder /app/backend .
COPY --from=builder /app/uploads ./uploads

EXPOSE 4001

CMD ["./backend"]
