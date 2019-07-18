export GOPATH=$HOME/Projects/go
export GOBIN=$GOPATH/bin
export GOROOT=/usr/local/opt/go/libexec
export PATH=$PATH:$(go env GOPATH)/bin:$GOROOT/bin
export GO111MODULE=on
export GOPROXY=https://gomodules.cbhq.net/
