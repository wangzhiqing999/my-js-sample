测试将 NodeJS 应用， 部署到 Docker 上面的操作.


首先，先测试已有的 NodeJS 应用，本地是否能正常运行.

安装依赖包.
npm install

测试运行.
npm start

打开浏览器，访问 http://localhost:3000/

显示正常，表示 NodeJS 应用没有问题。






测试的虚拟机
操作系统：ubuntu16
ip: 172.19.15.66
Docker版本：17.03.1-ce

本机文件复制到虚拟机上。

尝试使用 docker build 命令构造镜像.
sudo docker build -t docker_demo .

等待镜像构造完成。然后使用 images命令查看镜像。
sudo docker image ls

#启动镜像 -d表示后台执行，-p 9000:3000表示指定本地的9000端口隐射到容器内的3000端口，docker_demo为镜像名称
sudo docker run -d -p 9000:3000 docker_demo

#查看容器
sudo docker ps


此时本机的浏览器打开 http://172.19.15.66:9000/, 观察虚拟机上的容器是否运行正常。


