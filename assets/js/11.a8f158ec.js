(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{490:function(a,s,t){"use strict";t.r(s);var e=t(4),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"配置阿里云的docker源-使用root用户执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置阿里云的docker源-使用root用户执行"}},[a._v("#")]),a._v(" 配置阿里云的docker源(使用root用户执行)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])]),t("h2",{attrs:{id:"列举出可用docker-ce版本并排序-使用root用户执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列举出可用docker-ce版本并排序-使用root用户执行"}},[a._v("#")]),a._v(" 列举出可用docker-ce版本并排序(使用root用户执行)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum list docker-ce --showduplicates "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v(" -r\n")])])]),t("h2",{attrs:{id:"选定docker版本并安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选定docker版本并安装"}},[a._v("#")]),a._v(" 选定docker版本并安装")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y docker-ce-19.03.10-3.el7\n")])])]),t("h2",{attrs:{id:"启动docker并将docker添加到开机启动项且查看docker状态三连-使用root用户执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动docker并将docker添加到开机启动项且查看docker状态三连-使用root用户执行"}},[a._v("#")]),a._v(" 启动docker并将docker添加到开机启动项且查看docker状态三连(使用root用户执行)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl start docker "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" docker "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" systemctl status docker\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);