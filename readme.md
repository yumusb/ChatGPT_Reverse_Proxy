git clone https://github.com/yumusb/ChatGPT_Reverse_Proxy.git  
cd ChatGPT_Reverse_Proxy  

vim docker-compose.yaml  

>\- 127.0.0.1:30050:80  # 映射的端口，推荐只监听本地，然后外面再套一层对外访问用.  
  ACCESS_TOKEN: you_token # 在 https://chat.openai.com/api/auth/session 中的 accessToken 字段   
  DOMAIN: chat.yourdomain.com # nginx想要绑定的host  


docker-compose up -d  


---
如果想要历史会话功能可用的话，将conf.d/openai.conf.template 中 location = /backend-api/conversations  条件 整体注释掉  
访问的host字段 需要与 配置项中 的 DOMAIN 对应。  

目前为失效状态 2023.03.09 15:38 
