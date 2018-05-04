# cloudmusic

--------------------
### V1.0
初始界面

### V1.1
添加登录注册弹出层
1. 登录注册窗体内容自动填充
2. 窗体中，登录按钮、注册按钮点击可切换对应窗体
3. 到达对应登录或注册界面时，按钮状态对应切换（即变为红色）
4. 窗体的表单有一定的校验功能：
 - 输入框中，需要输入11位纯数字或者任意非数字，否则报错
 - 密码框中需要输入6-16位密码，否则报错
 - 验证码框需要输入对应验证码GYyd，否则报错
5. 窗体下面的qq，微信，微博图标，当鼠标移动到上面时，图标背景颜色发生改变，除此之外没有实际效果

### V1.2
- 添加歌单轮播图
包括以下内容
1. 左右箭头能控制翻页
2. 翻页的时候，进度点，要联动进行focus
3. 翻到第三页的时候，下一页需要回到 第一页，翻到第一页的时候，同理
4. 进度点，在点击的时候，需要切换到对应的页面
5. 没有（进度点点击、翻页操作）的时候需要进行自动滚动
6. 滚动过程中，屏蔽其他操作（自动滚动、左右翻页、进度点点击）
7. 当鼠标停留在轮播图上时，停止自动轮播 

- 添加返回顶部按钮
1. 当页面滚动到一定进度，按钮自动出现
2. 当鼠标停留在按钮上时，出现‘返回顶部’字样
3. 点击按钮动态返回顶部
