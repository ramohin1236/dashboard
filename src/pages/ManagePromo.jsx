import React, { useState } from "react";
import {
  Input,
  Modal,
  Pagination,
  Table,
  Tabs,
  Tag,
  message,
  Button,
  Form,
} from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const ManagePromo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Dummy Promo Codes
  const [promoCodes, setPromoCodes] = useState(
    Array.from({ length: 25 }, (_, index) => ({
      key: index + 1,
      promoCode: `PROMO${1000 + index}`,
      promoType: index % 2 === 0 ? "Percentage" : "Flat",
      value: index % 2 === 0 ? `${10 + index}%` : `$${5 + index}`,
      limit: 50 + index,
      startDate: new Date().toLocaleDateString(),
      endDate: new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
      status: index % 2 === 0 ? "Active" : "Expired",
    }))
  );

  // Dummy Promo Uses
  const promoUses = Array.from({ length: 25 }, (_, index) => ({
    key: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    phone: `+8801${Math.floor(100000000 + Math.random() * 900000000)}`,
    image: `https://avatar.iran.liara.run/public/${index + 1}`,
    promoCode: `PROMO${1000 + (index % 10)}`,
    value: index % 2 === 0 ? "$5" : "$10",
    usageDate: new Date().toLocaleDateString(),
  }));

  // Modal states
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState(null);

  const showUpdateModal = (record) => {
    setSelectedPromo(record);
    setIsUpdateModalOpen(true);
  };

  const handleCancelUpdate = () => {
    setIsUpdateModalOpen(false);
    setSelectedPromo(null);
  };

  const handleUpdateSubmit = (values) => {
    message.success(`Promo Code ${selectedPromo.promoCode} updated successfully!`);
    setIsUpdateModalOpen(false);
  };

  const handleDelete = (record) => {
    Modal.confirm({
      title: `Are you sure you want to delete ${record.promoCode}?`,
      icon: <ExclamationCircleOutlined />,
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: () => {
        setPromoCodes(promoCodes.filter((p) => p.key !== record.key));
        message.success(`${record.promoCode} deleted successfully!`);
      },
    });
  };

  // Promo Code Columns
  const promoCodeColumns = [
    { title: "Promo Code", dataIndex: "promoCode", key: "promoCode" },
    { title: "Promo Type", dataIndex: "promoType", key: "promoType" },
    { title: "Value", dataIndex: "value", key: "value" },
    { title: "Limit", dataIndex: "limit", key: "limit" },
    { title: "Start Date", dataIndex: "startDate", key: "startDate" },
    { title: "End Date", dataIndex: "endDate", key: "endDate" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            style={{ background: "#115E59", color: "white" }}
            onClick={() => showUpdateModal(record)}
          >
            Update
          </Button>
          <Button danger onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  // Promo Uses Columns
  const promoUseColumns = [
    {
      title: "User Info",
      key: "userInfo",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.image}
            className="w-10 h-10 object-cover rounded-full"
            alt="User Avatar"
          />
          <div>
            <div>{record.name}</div>
            <div className="text-xs text-gray-500">{record.email}</div>
            <div className="text-xs text-gray-500">{record.phone}</div>
          </div>
        </div>
      ),
    },
    { title: "Promo Code Used", dataIndex: "promoCode", key: "promoCode" },
    { title: "Value", dataIndex: "value", key: "value" },
    { title: "Usage Date", dataIndex: "usageDate", key: "usageDate" },
  ];

  // Pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startPromo = (currentPage - 1) * pageSize;
  const endPromo = startPromo + pageSize;
  const paginatedPromoCodes = promoCodes.slice(startPromo, endPromo);

  const startUses = (currentPage - 1) * pageSize;
  const endUses = startUses + pageSize;
  const paginatedUses = promoUses.slice(startUses, endUses);

  return (
    <div className="bg-white p-3">
      <div className="flex justify-between mb-3">
        <h1 className="font-bold text-lg">Promo Management</h1>
        <Button
          type="primary"
          style={{ background: "#115E59" }}
          onClick={() => setIsAddModalOpen(true)}
        >
          Add New Promo
        </Button>
      </div>

      <Tabs defaultActiveKey="1">
        <TabPane tab="Promo Code" key="1">
          <Table
            dataSource={paginatedPromoCodes}
            columns={promoCodeColumns}
            pagination={false}
            scroll={{ x: 900 }}
          />

          <div className="mt-4 flex justify-center">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={promoCodes.length}
              onChange={handlePageChange}
              showSizeChanger={false}
            />
          </div>
        </TabPane>

        <TabPane tab="Promo Use" key="2">
          <Table
            dataSource={paginatedUses}
            columns={promoUseColumns}
            pagination={false}
            scroll={{ x: 800 }}
          />

          <div className="mt-4 flex justify-center">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={promoUses.length}
              onChange={handlePageChange}
              showSizeChanger={false}
            />
          </div>
        </TabPane>
      </Tabs>

      {/* Update Modal */}
      <Modal
        open={isUpdateModalOpen}
        centered
        onCancel={handleCancelUpdate}
        footer={null}
        title="Update Promo Code"
      >
        {selectedPromo && (
          <Form
            layout="vertical"
            onFinish={handleUpdateSubmit}
            initialValues={selectedPromo}
          >
            <Form.Item label="Promo Code" name="promoCode">
              <Input disabled />
            </Form.Item>

            <Form.Item label="Promo Type" name="promoType">
              <Input />
            </Form.Item>

            <Form.Item label="Value" name="value">
              <Input />
            </Form.Item>

            <Form.Item label="Limit" name="limit">
              <Input />
            </Form.Item>

            <Form.Item label="Start Date" name="startDate">
              <Input />
            </Form.Item>

            <Form.Item label="End Date" name="endDate">
              <Input />
            </Form.Item>

            <Form.Item label="Status" name="status">
              <Input />
            </Form.Item>

            <div className="flex justify-end gap-2">
              <Button onClick={handleCancelUpdate}>Cancel</Button>
              <Button
                type="primary"
                htmlType="submit"
                style={{ background: "#115E59" }}
              >
                Save
              </Button>
            </div>
          </Form>
        )}
      </Modal>

      {/* Add New Promo Modal */}
      <Modal
        open={isAddModalOpen}
        centered
        onCancel={() => setIsAddModalOpen(false)}
        footer={null}
        title="Add New Promo Code"
      >
        <Form layout="vertical" onFinish={() => message.success("Promo Added!")}>
          <Form.Item label="Promo Code" name="promoCode">
            <Input placeholder="e.g. WELCOME10" />
          </Form.Item>

          <Form.Item label="Promo Type" name="promoType">
            <Input placeholder="e.g. New user first order" />
          </Form.Item>

          <Form.Item label="Uses Limit" name="limit">
            <Input placeholder="e.g. 12" />
          </Form.Item>

          <Form.Item label="Discount Type" name="discountType">
            <Input placeholder="Percentage / Flat" />
          </Form.Item>

          <Form.Item label="Discount Value" name="discountValue">
            <Input placeholder="e.g. 10" />
          </Form.Item>

          <Form.Item label="Valid From" name="startDate">
            <Input placeholder="Select start date" />
          </Form.Item>

          <Form.Item label="Valid To" name="endDate">
            <Input placeholder="Select end date" />
          </Form.Item>

          <div className="flex justify-end gap-2">
            <Button onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit" style={{ background: "#115E59" }}>
              Save
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ManagePromo;
