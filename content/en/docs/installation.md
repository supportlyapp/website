---
title: Installation
description: ''
position: 2
category: Introduction

serverRequirements:
    - Supervisor (recommended)
    - PHP >= 7.2.5
    - BCMath PHP Extension
    - Ctype PHP Extension
    - Fileinfo PHP extension
    - JSON PHP Extension
    - Mbstring PHP Extension
    - OpenSSL PHP Extension
    - PDO PHP Extension
    - Tokenizer PHP Extension
    - XML PHP Extension

deployment: 
    - CPanel
    - Windows
---

## Requirements
The requirements of the server are the same of any laravel application as supportly uses laravel as backend. 
Also, you should have the ability to execute long-running processes using ```supervisor``` or any other process manager
supports ```php``` in order to get web-sockets server and queues up and running forever. 

### Server Requirements
<list :items="serverRequirements"></list>

<alert type="info">
    If you'r server can't use supervisor or can't run long-live processes please check the following fallback
     configuration for such servers like shared ones
</alert>

## Deployment & Virtual Host

Deployment of suportly is same of deployment of any other laravel application, but if you need some guidance kindly 
follow the following multiple deployment scenarios 

<alert type="warning">
    Going with any of the following deployment methods please don't forget to set your site documentRoot 
    inside the /public directory of the project to avoid your code being exposed and indexed from browsers. 
</alert>

<div>
    <div class="mt-3 flex"><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 mt-px mr-3 flex-shrink-0 text-primary-500"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
         <a href="https://laravelarticle.com/deploy-laravel-on-shared-hosting" target="_blank">CPanel</a>
    </div>
    <div class="mt-3 flex"><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 mt-px mr-3 flex-shrink-0 text-primary-500"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
        <a target="_blank" href="https://ourcodeworld.com/articles/read/584/how-to-configure-a-virtual-host-for-a-laravel-project-in-xampp-for-windows">XAMPP</a>
    </div>
    <div class="mt-3 flex"><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 mt-px mr-3 flex-shrink-0 text-primary-500"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
        <a target="_blank" href="https://laravel.com/docs/7.x/deployment#nginx">NGINX</a>
    </div>
</div>

## Setup & Configuration
Supportly provides two ways for configurations

### GUI via web page 

After deployment, you need to navigate to ```www.your-domain.com/setup``` then fill all the required fields 

### Command line 
Open a terminal in the root of the project then run the following command to start configuring the application 

<code-block label="Bash" active>

  ```bash
  php artisan supportly:setup
  ```
</code-block>

